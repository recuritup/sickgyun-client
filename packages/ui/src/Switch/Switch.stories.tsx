import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { Switch as SwitchComponent } from '.';

type Switch = typeof SwitchComponent;

const meta: Meta<Switch> = {
  component: SwitchComponent,
  title: 'Components/Switch',
};

export default meta;

export const Default: StoryObj<Switch> = {
  args: {
    options: [
      { name: 'True', value: false },
      { name: 'False', value: true },
    ],
  },
  render: (args) => {
    const { options } = args;
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [boolean, setBoolean] = useState(false);

    const handleBooleanSwitchChange = (value: any) => {
      setBoolean(value);
    };

    return (
      <div style={{ display: 'flex' }}>
        <SwitchComponent
          onChange={handleBooleanSwitchChange}
          value={boolean}
          options={options}
        />
      </div>
    );
  },
};
