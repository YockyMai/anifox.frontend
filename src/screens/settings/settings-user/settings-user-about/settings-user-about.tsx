import {
  Button,
  Editor,
  EditorContent,
  RichTextEditor,
  ScreenSection
} from '@anifox/ui'
import { useMemo, useState } from 'react'

import { $viewer } from '@/entities/viewer'
import { client } from '@/graphql/client'
import {
  useRemoveUserAboutMutation,
  useSaveUserAboutMutation
} from '@/graphql/generated/output'
import { api } from '@/services/api'

export const SettingsUserAbout = () => {
  const [editor, setEditor] = useState<Editor | null>(null)
  const viewer = $viewer.selectors.viewer()!

  const [saveUserAboutMutation, { loading: saveUserAboutMutationLoading }] =
    useSaveUserAboutMutation()
  const [removeUserAboutMutation, { loading: removeUserAboutMutationLoading }] =
    useRemoveUserAboutMutation()

  const loading = saveUserAboutMutationLoading || removeUserAboutMutationLoading

  const [localContent, setLocalContent] = useState<EditorContent | null>(
    viewer.about
      ? {
          html: viewer.about.html,
          json: JSON.parse(viewer.about.json),
          text: viewer.about.text
        }
      : null
  )

  const isEditable = useMemo(() => {
    return viewer.about?.text !== localContent?.text
  }, [localContent?.text, viewer.about?.text])

  const fileUpload = async (file: File) => {
    const image = await api.uploadImage(file)

    return image
  }

  const onSave = () => {
    if (localContent) {
      saveUserAboutMutation({
        variables: localContent,
        onCompleted: (data) => {
          $viewer.actions.setAbout(data.saveUserAbout)

          client.cache.modify({
            id: client.cache.identify({
              __typename: data.saveUserAbout.__typename,
              id: data.saveUserAbout.id
            }),
            fields: {
              html: () => data.saveUserAbout.html,
              json: () => data.saveUserAbout.json,
              text: () => data.saveUserAbout.text
            }
          })

          client.cache.modify({
            id: client.cache.identify({
              __typename: 'Viewer',
              id: viewer.id
            }),
            fields: {
              about: () => data.saveUserAbout
            }
          })
        }
      })
    } else {
      removeUserAboutMutation({
        onCompleted: (data) => {
          $viewer.actions.setAbout(null)

          client.cache.evict({
            id: client.cache.identify({
              __typename: data.removeUserAbout.__typename,
              id: data.removeUserAbout.id
            })
          })
        }
      })
    }
  }

  return (
    <ScreenSection
      title='Описание профиля'
      description='Расскажите о себе и своих увлечениях, эта информация будет отображатся в профиле. Максимальная длина - 1000 символов.'
    >
      <div className='flex flex-col gap-y-3'>
        <div className='rounded-md bg-slate-50 drop-shadow-xl dark:bg-slate-900/30'>
          <RichTextEditor
            onEditorInit={setEditor}
            fileUpload={fileUpload}
            content={localContent?.html}
            onUpdateContent={(content) => {
              setLocalContent(editor?.isEmpty ? null : content)
            }}
          />
        </div>
        {isEditable && (
          <Button isLoading={loading} disabled={loading} onClick={onSave}>
            Сохранить
          </Button>
        )}
      </div>
    </ScreenSection>
  )
}
