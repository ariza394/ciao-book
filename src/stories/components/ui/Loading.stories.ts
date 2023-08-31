import { Meta, StoryObj } from "@storybook/react";
import Loading from "../../../components/ui/loading/Loading";

const meta = {
    title: 'Base/components/ui/Loading',
    component: Loading,
    parameters: {
        layout: 'centered'
    }
} satisfies Meta<typeof Loading>;

export default meta;
type Story = StoryObj<typeof meta>

export const Basic: Story = {
    args:{
        label:'Click me',
    }
}