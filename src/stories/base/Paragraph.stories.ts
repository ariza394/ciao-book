import { Meta, StoryObj } from "@storybook/react";
import Paragraph from "../../components/base/typography/Paragraph/Paragraph";

const meta = {
    title: 'Base/Typography/Paragraph',
    component: Paragraph,
    tags: ['autodocs'],
    parameters: {
        layout: 'centered'
    },
    argTypes:{
        size: { control: 'radio' },
        bold: { control: 'radio' },
        color: { control: 'inline-radio' },
    }
} satisfies Meta<typeof Paragraph>;

export default meta;
type Story = StoryObj<typeof meta>

export const Basic: Story = {
    args:{
        children:'Basic Paragraph',
    }
}