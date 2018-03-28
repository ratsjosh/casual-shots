import Vue from 'vue'
import Gallery from '@/components/Gallery'

describe('Gallery.vue', () => {
  it('should render correct contents', () => {
    const Constructor = Vue.extend(Gallery)
    const vm = new Constructor().$mount()
    expect(vm.$el.querySelector('.hello h1').textContent)
      .toEqual('Welcome to Your Vue.js App')
  })
})
