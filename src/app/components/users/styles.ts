// Estilos en línea
 const styles = {
    container: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      minHeight: "100vh",
      backgroundColor: "#f0f0f0",
    },
    form: {
      backgroundColor: "#fff",
      padding: "2rem",
      borderRadius: "8px",
      boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
      width: "300px",
      textAlign: "center" as const, // Eliminado 'as "center"' para usar as const directo
    },
    heading: {
      marginBottom: "1rem",
      fontSize: "1.5rem",
      color: "#333",
    },
    inputContainer: {
      marginBottom: "1rem",
      textAlign: "left" as const, // Eliminado 'as "left"'
    },
    label: {
      display: "block",
      marginBottom: "0.5rem",
      fontSize: "1rem",
      color: "#333",
    },
    input: {
      width: "100%",
      padding: "0.5rem",
      borderRadius: "4px",
      border: "1px solid #ccc",
      fontSize: "1rem",
    },
    button: {
      width: "100%",
      padding: "0.75rem",
      borderRadius: "4px",
      border: "none",
      backgroundColor: "#0070f3",
      color: "#fff",
      fontSize: "1rem",
      cursor: "pointer",
    },
    message: {
      marginBottom: "1rem",
      fontSize: "1rem",
      color: "green",
    },
    error: {
      color: "red",
      fontSize: "0.9rem",
    },
  };
  
  export default styles;
  