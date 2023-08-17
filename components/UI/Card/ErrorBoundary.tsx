import React, { Component, ErrorInfo, ReactNode } from "react";
import { Button } from "../Button";

interface Props {
  children?: ReactNode;
  className?: string;
}

interface State {
  hasError: boolean;
}

class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false
  };

  public tryAgain() {
    this.setState({ hasError: false });
  }

  public static getDerivedStateFromError(_: Error): State {
    return { hasError: true };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("Uncaught error:", error, errorInfo);
  }

  public render() {
    if (this.state.hasError) {
      return (
        <div className={this.props.className}>
          <span>Sorry, there was an error in this component..</span>
          <Button onClick={this.tryAgain}>Try again</Button>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
