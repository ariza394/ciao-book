import { Meta, StoryObj } from "@storybook/react";
import Button from "../../components/button/Button";

const meta = {
    title: 'Base/components/Button',
    component: Button,
    parameters: {
        layout: 'centered'
    }
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>

export const Basic: Story = {
    args:{
        label:'Click me',
    }
}