import React from "react";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.log(error);
    console.log(errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <h1
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
            color: "#f7992b",
            backgroundColor: "#090909",
            height: "100vh",
            width: "100%",
          }}
        >
          !OOPS&#128543; <br /> Something went wrong.
        </h1>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
