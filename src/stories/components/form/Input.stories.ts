import { Meta, StoryObj } from "@storybook/react";
import Input from "../../../components/forms/Input";

const meta = {
    title: 'Base/components/form/input',
    component: Input,
    tags: ['autodocs'],
    parameters: {
        layout: 'centered'
    },
    argTypes: {
        inputColor: {
          control: {
            type: 'radio',
            options: ['input-primary', 'input-secondary', 'input-success', 'input-warning'],
          },
        },
      },
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>

export const Basic: Story = {
    args:{
        label:'First name',
    }
}
