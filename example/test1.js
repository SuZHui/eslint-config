import { findVariant, getFirstVariant, toVariant } from '@hotishop/utils'
import { emit, page } from '@hotishop/global'
import { Product } from '@hotishop/product'

// 页面进入时获取url中的变种id参数
const queryVariantId = new URLSearchParams(location.search).get('variant')
const rawP = page.payload.product

let variant = getFirstVariant(page.payload.product)

if (queryVariantId) {
  variant = findVariant(rawP, +queryVariantId)

  // 如果变种存在 才触发变种切换事件
  // 数据初始化会在gallery组件初始化之前， 需要缓存事件让组件加载后直接获取最新值
  variant && emit('VARIANT_CHANGE', variant, true)
}

Product.changeVariant(variant || toVariant(rawP))

function replaceQuery(key, val) {
  // const url = location.origin + location.pathname;
  const query = new URLSearchParams(location.search)

  query.set(key, `${val}`)

  return `?${query.toString()}`
}

let id

Product.subscribe((state) => {
  if (state.cur.isVariant) {
    // TODO: 应该在store内部处理，比对id是否发生变化
    if (state.cur.id !== id) {
      // eslint-disable-next-line prefer-destructuring
      id = state.cur.id

      // 设置变种id到url
      window.history.replaceState({}, '', replaceQuery('variant', id))
    }
  }
})
