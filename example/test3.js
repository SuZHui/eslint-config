import { useCallback, useEffect, useState } from 'react'
import { store } from '@hotishop/global'

/**
 * 页面共享状态hook
 * @deprecated
 * @param {string} key
 * @param {any} defaultValue
 * @returns {[state, function]}
 */
export function useStore(
  key,
) {
  const [state, _setState] = useState(
    () => store.state[key],
  )

  useEffect(() => {
    return store.subscribe(key, () => {
      _setState(store.state[key])
    })
  }, [key])

  const setState = useCallback(
    (val) => {
      store.setState({ [key]: val })
    },
    [key],
  )

  return [state, setState]
}
