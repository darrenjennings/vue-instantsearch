import { storiesOf } from '@storybook/vue';
import { previewWrapper } from './utils';

storiesOf('RatingMenu', module)
  .addDecorator(
    previewWrapper({
      indexName: 'instant_search_rating_asc',
    })
  )
  .add('default', () => ({
    template: `
      <div>
        <ais-rating-menu attribute="rating">
        </ais-rating-menu>
      </div>`,
  }))
  .add('custom rendering', () => ({
    template: `
      <div>
        <ais-rating-menu attribute="rating">
          <template slot-scope="{ items, refine }">
            rating
            <ul>
              <li v-for="(item, key) in items" :key="key">
                <button @click="refine(item.value)">
                  {{item.isRefined ? '🙅‍♀️' : '✔️'}} {{item.name}} & up
                </button>
              </li>
            </ul>
          </template>
        </ais-rating-menu>
      </div>`,
  }));
