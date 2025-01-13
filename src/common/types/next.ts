export type GenerateMetadataProps<PageParams = any> = {
  params: Promise<PageParams>
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}
