import { useFormik } from "formik";
import Grid from "@mui/material/Unstable_Grid2";
import {
  CardContent,
  TextField,
  InputAdornment,
  CardActions,
  Button,
} from "@mui/material";
import {
  Face6Rounded,
  SubjectRounded,
  EmailRounded,
} from "@mui/icons-material";
import { contactValidationSchema } from "../../validations/contactValidation";

import { ToastContainer, toast } from "react-toastify";

const ContactForm = () => {
  const notify = () => {
    console.log("good");
    toast.success("هیچ اتفاقی نیفتاد! لطفا تلاش نفرمایید😵‍💫");
  };

  const contactInputNames = {
    fullname: "",
    email: "",
    subject: "",
    message: "",
    recaptcha: "",
  };

  const formik = useFormik({
    initialValues: contactInputNames,
    onSubmit: (values) => {
      console.log("Form Values: ", values);
    },
    validationSchema: contactValidationSchema,
  });

  return (
    <>
      <form autoComplete="off" onSubmit={formik.handleSubmit}>
        <ToastContainer rtl={true} position="top-right" theme="colored" />
        <CardContent>
          <Grid container spacing={2} sx={{ direction: "ltr" }}>
            <Grid xs={12} md={6}>
              <TextField
                fullWidth
                size="small"
                color="warning"
                label="نام و نام خانوادگی"
                name="fullname"
                variant="outlined"
                helperText={
                  formik.touched.fullname ? formik.errors.fullname : null
                }
                error={Boolean(
                  formik.touched.fullname && formik.errors.fullname
                )}
                value={formik.values?.fullname}
                onChange={formik.handleChange}
                InputProps={{
                  endAdornment: (
                    <InputAdornment postion="end">
                      <Face6Rounded />
                    </InputAdornment>
                  ),
                }}
              />
            </Grid>
            <Grid xs={12} md={6}>
              <TextField
                fullWidth
                size="small"
                color="warning"
                label="آدرس ایمیل"
                name="email"
                variant="outlined"
                helperText={formik.touched.email ? formik.errors.email : null}
                error={Boolean(formik.touched.email && formik.errors.email)}
                value={formik.values?.email}
                onChange={formik.handleChange}
                InputProps={{
                  endAdornment: (
                    <InputAdornment postion="end">
                      <EmailRounded />
                    </InputAdornment>
                  ),
                }}
              />
            </Grid>
            <Grid xs={12} md={12}>
              <TextField
                fullWidth
                size="small"
                color="warning"
                label="عنوان"
                name="subject"
                variant="outlined"
                helperText={
                  formik.touched.subject ? formik.errors.subject : null
                }
                error={Boolean(formik.touched.subject && formik.errors.subject)}
                value={formik.values?.subjectj}
                onChange={formik.handleChange}
                InputProps={{
                  endAdornment: (
                    <InputAdornment postion="end">
                      <SubjectRounded />
                    </InputAdornment>
                  ),
                }}
              />
            </Grid>
            <Grid xs={12} md={12}>
              <TextField
                fullWidth
                multiline
                rows={6}
                size="small"
                color="warning"
                label="متن پیام"
                name="message"
                variant="outlined"
                helperText={
                  formik.touched.message ? formik.errors.message : null
                }
                error={Boolean(formik.touched.message && formik.errors.message)}
                value={formik.values?.message}
                onChange={formik.handleChange}
              />
            </Grid>
          </Grid>
        </CardContent>
        <CardActions
          sx={{
            alignItems: "end",
            flexDirection: "column",
          }}
        >
          <Button
            type="submit"
            color="success"
            variant="contained"
            sx={{ mt: 2 }}
            fullWidth
          >
            نفرست بابا فیکه!
          </Button>
        </CardActions>
      </form>
    </>
  );
};

export default ContactForm;
