type ColorHex = `#${string}`
type CSSValue = string | number | ColorHex

interface ITokensSchema {
  [key: string | number]: CSSValue | ITokensSchema
}

type Param<T> = T extends ITokensSchema
  ? keyof T extends infer K
    ? K extends string | number | `${number}`
      ? T[K] extends ITokensSchema
        ? `${K}.${Param<T[K]>}`
        : K | `${K}`
      : never
    : never
  : never

type ThemeFactory<T extends ITokensSchema> = (param: Param<T>) => CSSValue | unknown

const CACHE = new Map()

const get = (
  config: ITokensSchema | CSSValue,
  path: string | undefined,
): ITokensSchema | CSSValue => {
  const pathArray = path ? path.split('.') : []
  let obj = config
  for (let p = 0; p < pathArray.length; p++) {
    obj = (obj as ITokensSchema)[pathArray[p]]
    if (obj === undefined) return ''
  }

  return obj
}

export const createTheme = <T extends ITokensSchema>(config: T): ThemeFactory<T> => {
  return (param) => {
    const paramStr = param.toString()
    if (CACHE.has(paramStr)) return CACHE.get(paramStr)
    const result = get(config, paramStr)
    CACHE.set(paramStr, result)
    return result
  }
}
