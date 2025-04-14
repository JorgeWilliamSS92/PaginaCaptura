export const check = (info, type) => {
  if (type === "name") {
    if (info.length < 3) {
      alert("O nome deve ter no mínimo 3 caracteres");
      return false;
    } else if (info.length > 50) {
      alert("O nome deve ter no máximo 50 caracteres");
      return false;
    } else if (!info.includes(" ")) {
      alert("O nome deve ser composto e separado por espaço");
      return false;
    } else {
      return true;
    }
  } else if (type === "email") {
    if (!info.includes("@")) {
      alert("O e-mail deve conter o símbolo @");
      return false;
    } else if (!info.includes(".com")) {
      alert("O e-mail não parece ser válido");
      return false;
    } else {
      return true;
    }
  } else {
    if (info.length < 11) {
      alert("O telefone deve ter no mínimo 9 dígitos");
      return false;
    } else {
      return true;
    }
  }
};
