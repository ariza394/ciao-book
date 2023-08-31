import { Meta, StoryObj } from "@storybook/react";
import H1 from "../../components/base/typography/H1/H1";

const meta = {
    title: 'Base/Typography/H1',
    component: H1,
    tags: ['autodocs'],
    parameters: {
        layout: 'centered'
    },
    argTypes:{
        color: { control: 'select' }
    }
} satisfies Meta<typeof H1>;

export default meta;
type Story = StoryObj<typeof meta>

export const Basic: Story = {
    args:{
        children:'Basic Title',
    }
}