import { MatButtonModule } from '@angular/material/button';
import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { NavComponent } from './nav.component';

export default {
  title: 'NavComponent',
  component: NavComponent,
  decorators: [
    moduleMetadata({
      imports: [MatButtonModule],
    }),
  ],
} as Meta<NavComponent>;

const Template: Story<NavComponent> = (args: NavComponent) => ({
  component: NavComponent,
  props: args,
});

export const Primary = Template.bind({});
Primary.args = {};
