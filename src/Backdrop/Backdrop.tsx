/* ======================================================================== *
 * Copyright 2024 HCL America Inc.                                          *
 * Licensed under the Apache License, Version 2.0 (the "License");          *
 * you may not use this file except in compliance with the License.         *
 * You may obtain a copy of the License at                                  *
 *                                                                          *
 * http://www.apache.org/licenses/LICENSE-2.0                               *
 *                                                                          *
 * Unless required by applicable law or agreed to in writing, software      *
 * distributed under the License is distributed on an "AS IS" BASIS,        *
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. *
 * See the License for the specific language governing permissions and      *
 * limitations under the License.                                           *
 * ======================================================================== */
import React from 'react';
import { Components, Theme } from '@mui/material';
import MuiBackdrop, { BackdropProps } from '@mui/material/Backdrop';

export enum BackdropTestIds {
  BACKDROP_ROOT = 'backdropRoot',
}

export const getMuiBackdropThemeOverrides = (): Components<Omit<Theme, 'components'>> => {
  return {
    MuiBackdrop: {
      styleOverrides: {
        root: ({ ownerState, theme }) => {
          return ({
            backgroundColor: ownerState.invisible ? 'transparent' : theme.palette.background.overlay,
          });
        },
      },
    },
  };
};

const Backdrop = ({ ...props }: BackdropProps) => {
  return <MuiBackdrop {...props} data-testid={BackdropTestIds.BACKDROP_ROOT} />;
};

Backdrop.defaultProps = {
  invisible: false,
};

export * from '@mui/material/Backdrop';
export default Backdrop;
