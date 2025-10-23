import { Image, Dropzone, ScreenSection, toast } from '@anifox/ui'
import { gql, useApolloClient } from '@apollo/client'

import { DEFAULT_USER_BANNER } from '@/entities/user'
import { $viewer } from '@/entities/viewer'
import { api } from '@/services/api'

export const SettingsBanner = () => {
  const client = useApolloClient()
  const viewer = $viewer.selectors.viewer()!

  const saveBanner = async (file: File) => {
    if (!file) {
      return
    }

    const toastId = toast.loading('Загрузка баннера...')

    const user = await api.uploadUserBanner(file)

    $viewer.actions.setBanner(user.banner)

    client.writeFragment({
      id: client.cache.identify({ __typename: 'User', id: viewer.id }),
      fragment: gql`
        fragment UserBanner on User {
          banner
        }
      `,
      data: {
        banner: user.banner
      }
    })

    toast.update(toastId, {
      render: 'Баннер успешно обновлен',
      type: 'success',
      isLoading: false,
      autoClose: 3000
    })
  }

  return (
    <ScreenSection
      title='Баннер'
      description='Изображение баннера аккаунта должно быть гарзонтального формата. Если вы загрузите изображение, например, с соотношением сторон 1 / 1, то оно будет обрезано.'
    >
      <div className='grid grid-cols-1 items-center gap-x-5 gap-y-3 lg:grid-cols-[auto_300px]'>
        <div>
          <Image
            className='aspect-[12/4] w-full rounded'
            src={viewer?.banner ?? DEFAULT_USER_BANNER}
          />
        </div>

        <Dropzone
          accept='image/*'
          onFile={async (files) => {
            const file = files[0]

            if (file && file.type.includes('image')) {
              await saveBanner(file)
            }
          }}
        />
      </div>
    </ScreenSection>
  )
}
