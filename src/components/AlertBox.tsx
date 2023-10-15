import { AlertProps } from "@/types";
import { AlertCircle } from "lucide-react"

import {
    Alert,
    AlertDescription,
    AlertTitle,
} from "@/components/ui/alert"

export function AlertBox({ message, type }: AlertProps) {
    const TYPE = type == 'error' ? 'destructive' : 'default';
    return (
        <Alert variant={TYPE}>
            <AlertCircle className="h-4 w-4" />
            <AlertTitle>Error</AlertTitle>
            <AlertDescription>
                {message}
            </AlertDescription>
        </Alert>
    )
}

export default Alert;