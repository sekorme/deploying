'use client'
import EmptyState from "@/components/EmptyState";

interface ErrorStateProps{
    error: Error
}

const ErrorState: React.FC<ErrorStateProps> = ({error}) => {
  return (
    <EmptyState
    title = {error.message}
    subtitle = {error.stack}
    showReset
    />
  )
}
export default ErrorState