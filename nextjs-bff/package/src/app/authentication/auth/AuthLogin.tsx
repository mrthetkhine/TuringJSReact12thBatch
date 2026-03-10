'use client';
import React, {useState} from "react";
import {
  Box,
  Typography,
  FormGroup,
  FormControlLabel,
  Button,
  Stack,
  Checkbox,
} from "@mui/material";
import Link from "next/link";

import CustomTextField from "@/app/(DashboardLayout)/components/forms/theme-elements/CustomTextField";
import {useForm} from "react-hook-form";
import {MovieSchema, MovieSchemaForm} from "@/app/lib/schema/movieSchema";
import {zodResolver} from "@hookform/resolvers/zod";
import {AuthSchema, AuthSchemaForm} from "@/app/lib/schema/authSchema";
import {Movie} from "@/app/lib/types";
import {saveOrUpdateMovie} from "@/app/lib/actions/movieAction";
import {loginAction} from "@/app/lib/actions/authAction";

interface loginType {
  title?: string;
  subtitle?: React.ReactNode;
  subtext?: React.ReactNode;
}

const AuthLogin = ({ title, subtitle, subtext }: loginType) => {
  const [pending,setPending] = useState(false);

  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors, touchedFields },
  } = useForm<AuthSchemaForm>({
    resolver: zodResolver(AuthSchema),
    // defaultValues: specify default values for form inputs
    defaultValues: {

    },
  });
  const onSubmit = (data: AuthSchemaForm) => {
    console.log('onSubmit', data);
    loginAction(data)
    .then((response) => {
      console.log('Login success ',response);
    },err=>{
      console.log('Login error ',err);
    });
  };
  return (
      <form onSubmit={handleSubmit(onSubmit)}>
        {title ? (
            <Typography fontWeight="700" variant="h2" mb={1}>
              {title}
            </Typography>
        ) : null}



        <Stack>


          <Box>
            <Typography
                variant="subtitle1"
                fontWeight={600}
                component="label"
                htmlFor="username"
                mb="5px"
            >
              Username
            </Typography>
            <CustomTextField
                variant="outlined"
                fullWidth
                {...register("username")}
                error={!!errors.username}
                helperText={errors.username?.message}
            />
          </Box>
          <Box mt="25px">
            <Typography
                variant="subtitle1"
                fontWeight={600}
                component="label"
                htmlFor="password"
                mb="5px"

            >
              Password
            </Typography>
            <CustomTextField
                type="password" variant="outlined" fullWidth

                {...register("password")}
                error={!!errors.password}
                helperText={errors.password?.message}/>
          </Box>
          <Stack
              justifyContent="space-between"
              direction="row"
              alignItems="center"
              my={2}
          >

          </Stack>

        </Stack>
        <Box>
          <Button
              color="primary"
              variant="contained"
              size="large"
              fullWidth
              type="submit"
          >
            Sign In
          </Button>
        </Box>
        {subtitle}
      </form>
  );
}

export default AuthLogin;
