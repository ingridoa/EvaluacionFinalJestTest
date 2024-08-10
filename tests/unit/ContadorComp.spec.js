import { mount } from '@vue/test-utils';
import ContadorView from '@/views/ContadorView.vue';
import { createStore } from 'vuex';
describe('ContadorView',() => {
    const store = createStore({
        state() {
          return {
            count: 0
          }
        },
        mutations: {
          increment(state) {
            state.count += 1
          }
        }
      })
      
      
      test('vuex', async () => {
          const wrapper = mount(ContadorView, {
              global: {
                  plugins: [store]
                }
            })
            
            await wrapper.find('button').trigger('click')
            
            expect(wrapper.html()).toContain('contador: 1')
        })
    })