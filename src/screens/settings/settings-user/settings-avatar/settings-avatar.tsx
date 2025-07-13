import { Image, Modal, ImageCropper, CroppedImage, Button } from '@anifox/ui'
import { gql, useApolloClient } from '@apollo/client'
import { IconPhotoUp } from '@tabler/icons-react'
import { use, useState } from 'react'

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
  const [croppedImage, setCroppedImage] = useState<CroppedImage | null>(null)

  const closeModal = () => {
    setFileForUpload(null)
    setEditableImage(null)
    setCroppedImage(null)
  }

  const saveAvatar = async () => {
    if (!fileForUpload) {
      return
    }

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
  }

  return (
    <div className='flex flex-wrap items-center gap-x-5 gap-y-3'>
      <Image
        className='aspect-square w-full max-w-[300px]'
        src={viewer?.avatar ?? DEFAULT_USER_AVATAR}
      />

      <div className='relative flex aspect-square w-full max-w-[300px] items-center justify-center rounded-lg border border-dashed border-slate-300'>
        <div className='flex flex-col items-center gap-y-3'>
          <IconPhotoUp />
          <p className='text-center text-sm'>
            Нажмите, чтобы загрузить новое изображение
          </p>
        </div>

        <input
          type='file'
          accept='image/*'
          className='absolute h-full w-full cursor-pointer opacity-0'
          onChange={async (e) => {
            const file = e.target.files?.[0]

            if (file) {
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
      </div>

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
  )
}
