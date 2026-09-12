const base = import.meta.env.BASE_URL

export const basePath = base.replace(/\/$/, '')

export function url(path = ''): string {
  const clean = path.replace(/^\/+/, '')
  return clean ? `${basePath}/${clean}` : `${basePath}/`
}

export function stripBase(pathname: string): string {
  const stripped = pathname.startsWith(basePath)
    ? pathname.slice(basePath.length)
    : pathname
  return stripped.replace(/\/+$/, '') || '/'
}
