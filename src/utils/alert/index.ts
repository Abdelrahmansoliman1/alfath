import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const MySwal = withReactContent(Swal);

export const successAlert = (title: string, text: string) => {
  MySwal.fire({
    title,
    text,
    icon: "success",
  });
};

export const errorAlert = (title: string, text: string) => {
  MySwal.fire({
    title,
    text,
    icon: "error",
  });
};
