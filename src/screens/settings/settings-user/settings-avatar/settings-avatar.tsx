import {
  Image,
  Modal,
  ImageCropper,
  Button,
  Dropzone,
  ScreenSection,
  toast
} from '@anifox/ui'
import { gql, useApolloClient } from '@apollo/client'
import { useState } from 'react'

import { fileToSrc } from '@/common/helpers'
import { DEFAULT_USER_AVATAR } from '@/entities/user'
import { $viewer } from '@/entities/viewer'
import { api } from '@/services/api'

export const SettingsAvatar = () => {
  const client = useApolloClient()
  const viewer = $viewer.selectors.viewer()!

  const [editableImage, setEditableImage] = useState<string | null>(null)
  const [fileForUpload, setFileForUpload] = useState<{
    file: File
    src: string
  } | null>(null)

  const closeModal = () => {
    setFileForUpload(null)
    setEditableImage(null)
  }

  const saveAvatar = async () => {
    if (!fileForUpload) {
      return
    }

    const toastId = toast.loading('Загрузка аватара...')

    const user = await api.uploadUserAvatar(fileForUpload.file)

    $viewer.actions.setAvatar(user.avatar)

    client.writeFragment({
      id: client.cache.identify({ __typename: 'User', id: viewer.id }),
      fragment: gql`
        fragment UserAvatar on User {
          avatar
        }
      `,
      data: {
        avatar: user.avatar
      }
    })

    closeModal()

    toast.update(toastId, {
      render: 'Аватар успешно обновлен',
      type: 'success',
      isLoading: false,
      autoClose: 3000
    })
  }

  return (
    <ScreenSection
      title='Аватар'
      description='Настройте свой аватар, он отображается в профиле, комментариях и других местах.'
    >
      <div className='flex flex-wrap items-center gap-x-5 gap-y-3'>
        <Image
          className='aspect-square w-full max-w-[300px]'
          src={viewer?.avatar ?? DEFAULT_USER_AVATAR}
        />

        <Dropzone
          accept='image/*'
          onFile={async (files) => {
            const file = files[0]

            if (file && file.type.includes('image')) {
              const type = file.type.split('/')[1]
              const src = await fileToSrc(file)

              if (type === 'jpeg') {
                setEditableImage(src)
                setFileForUpload({ file, src })
              } else {
                setFileForUpload({ file, src })
              }
            } else {
              setEditableImage(null)
              setFileForUpload(null)
            }
          }}
        />

        <Modal
          open={fileForUpload !== null}
          onOpenChange={closeModal}
          title='Настройка изображения'
          description='Обрежте изображение по желанию и нажмите на кнопку "применить"'
        >
          <div className='aspect-square w-full overflow-hidden rounded'>
            {editableImage ? (
              <ImageCropper
                onComplete={(croppedImage) => {
                  setFileForUpload({
                    file: croppedImage.file,
                    src: croppedImage.url
                  })
                }}
                imageSrc={editableImage}
              />
            ) : (
              <Image src={fileForUpload?.src} />
            )}
          </div>

          <div className='mt-3 grid grid-cols-2 gap-x-3'>
            <Button onClick={closeModal} fullWidth color='red'>
              Отмена
            </Button>
            <Button
              onClick={saveAvatar}
              disabled={!fileForUpload}
              fullWidth
              color='green'
            >
              Сохранить
            </Button>
          </div>
        </Modal>
      </div>
    </ScreenSection>
  )
}
