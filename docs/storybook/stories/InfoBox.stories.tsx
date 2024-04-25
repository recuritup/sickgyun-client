import { InfoBox as InfoBoxComponent } from '@sickgyun/ui';
import type { Meta, StoryObj } from '@storybook/react';

type InfoBox = typeof InfoBoxComponent;

const meta: Meta<InfoBox> = {
  component: InfoBoxComponent,
  title: 'Components/InfoBox',
};

export default meta;

export const Default: StoryObj<InfoBox> = {
  args: {
    label: 'label',
    children: 'info box',
  },
  render: (args) => <InfoBoxComponent {...args} />,
};