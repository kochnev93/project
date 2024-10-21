import React, { ErrorInfo } from 'react';
import { PageError } from 'widjets/PageError';

interface ErrorBoundaryProps {
    children: React.ReactNode;
}

interface ErrorBoundaryStateType {
    hasError: boolean;
}

class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryStateType> {
    constructor(props: ErrorBoundaryProps) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError(error: Error) {
        return { hasError: true };
    }

    componentDidCatch(error: Error, errorInfo: ErrorInfo) {
        console.log(error, errorInfo);
    }

    render() {
        const { hasError } = this.state;
        const { children } = this.props;

        if (hasError) return <PageError />;

        return children;
    }
}

export default ErrorBoundary;
