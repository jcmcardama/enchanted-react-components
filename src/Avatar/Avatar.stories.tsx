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
import { StoryFn, Meta } from '@storybook/react';
import IconAvatar from '@hcl-software/enchanted-icons/dist/carbon/es/folder';

import Typography from '../Typography';
import Avatar, { AvatarColors, AvatarTestIds, AvatarTypes } from './Avatar';

export default {
  title: 'Data display/Avatar',
  component: Avatar,
  argTypes: {
    type: {
      description: 'The type of the Avatar. It can be image, letter or icon type.',
      options: [AvatarTypes.IMAGE, AvatarTypes.LETTER, AvatarTypes.ICON],
      control: { type: 'radio' },
      if: { arg: 'interactive' },
      table: {
        defaultValue: {
          summary: 'image',
        },
      },
    },
    color: {
      description: 'Background color of Avatar component when type is set to icon or letter.',
      options: [AvatarColors.DEFAULT, AvatarColors.RED, AvatarColors.ORANGE, AvatarColors.YELLOW, AvatarColors.LIME, AvatarColors.GREEN,
        AvatarColors.TEAL, AvatarColors.BLUE, AvatarColors.INDIGO, AvatarColors.PURPLE, AvatarColors.PINK],
      control: { type: 'radio' },
      if: { arg: 'interactive' },
      table: {
        defaultValue: {
          summary: 'default',
        },
      },
    },
    variant: {
      description: 'Variant of Avatar component.',
      options: ['circular', 'rounded'],
      control: { type: 'radio' },
      if: { arg: 'interactive' },
      table: {
        defaultValue: {
          summary: 'default',
        },
      },
    },
    iconImage: {
      description: 'Icon image of Avatar component when type is set to icon. This is an object and can not edit.',
      if: { arg: 'interactive' },
      table: {
        defaultValue: {
          summary: 'default',
        },
      },
    },
    imageAltProps: {
      description: 'imageAltProps of Avatar component.',
      if: { arg: 'interactive' },
      table: {
        defaultValue: {
          summary: 'default',
        },
      },
    },
    alt: {
      description: 'alt of Avatar component.',
      if: { arg: 'interactive' },
      table: {
        defaultValue: {
          summary: 'default',
        },
      },
    },
    children: {
      description: 'children of Avatar component.',
      if: { arg: 'interactive' },
      table: {
        defaultValue: {
          summary: 'default',
        },
      },
    },
    classes: {
      description: 'classes of Avatar component.',
      if: { arg: 'interactive' },
      table: {
        defaultValue: {
          summary: 'default',
        },
      },
    },
    imgProps: {
      description: 'imgProps of Avatar component.',
      if: { arg: 'interactive' },
      table: {
        defaultValue: {
          summary: 'default',
        },
      },
    },
    sizes: {
      description: 'sizes of Avatar component.',
      if: { arg: 'interactive' },
      table: {
        defaultValue: {
          summary: 'default',
        },
      },
    },
    src: {
      description: 'src of Avatar component.',
      if: { arg: 'interactive' },
      table: {
        defaultValue: {
          summary: 'default',
        },
      },
    },
    srcSet: {
      description: 'srcSet of Avatar component.',
      if: { arg: 'interactive' },
      table: {
        defaultValue: {
          summary: 'default',
        },
      },
    },
    ref: {
      description: 'ref of Avatar component.',
      if: { arg: 'interactive' },
      table: {
        defaultValue: {
          summary: 'default',
        },
      },
    },
    imageProps: {
      description: 'imageProps of Avatar component.',
      if: { arg: 'interactive' },
      table: {
        defaultValue: {
          summary: 'default',
        },
      },
    },
    sx: {
      description: 'sx of Avatar component.',
      if: { arg: 'interactive' },
      table: {
        defaultValue: {
          summary: 'default',
        },
      },
    },
    imageSource: {
      description: 'Image source of Avatar component when type is set to image. It can be replaced with any other image url',
      if: { arg: 'interactive' },
      table: {
        defaultValue: {
          summary: '/green bowl_bea.png',
        },
      },
    },
    letter: {
      description: 'Typography Avatar input when type is set to letter.',
      if: { arg: 'interactive' },
      control: 'text',
      table: {
        defaultValue: {
          summary: 'NA',
        },
      },
    },
  },
} as Meta<typeof Avatar>;

const VisualTestTemplate: StoryFn<typeof Avatar> = (args) => {
  return (
    <>
      <Typography sx={{ color: 'rgba(0, 0, 0, 0.60);' }} variant="body1">
        Avatar Circular Letter
      </Typography>
      <Avatar
        imageSource="green bowl_bea.png"
        letter="NA"
        imageAltProps="Avatar image source"
        iconImage={<IconAvatar data-testid={AvatarTestIds.AVATAR_ICON} />}
        color={AvatarColors.DEFAULT}
        variant="circular"
        type={AvatarTypes.LETTER}
      />
      &nbsp;
      <Typography sx={{ color: 'rgba(0, 0, 0, 0.60);' }} variant="body1">
        Avatar Circular Icon
      </Typography>
      <Avatar
        imageSource="green bowl_bea.png"
        letter="NA"
        imageAltProps="Avatar image source"
        iconImage={<IconAvatar data-testid={AvatarTestIds.AVATAR_ICON} />}
        color={AvatarColors.DEFAULT}
        variant="circular"
        type={AvatarTypes.ICON}
      />
      &nbsp;
      <Typography sx={{ color: 'rgba(0, 0, 0, 0.60);' }} variant="body1">
        Avatar Circular Image
      </Typography>
      <Avatar
        imageSource="green bowl_bea.png"
        letter="NA"
        imageAltProps="Avatar image source"
        iconImage={<IconAvatar data-testid={AvatarTestIds.AVATAR_ICON} />}
        color={AvatarColors.DEFAULT}
        variant="circular"
        type={AvatarTypes.IMAGE}
      />
      &nbsp;
      <Typography sx={{ color: 'rgba(0, 0, 0, 0.60);' }} variant="body1">
        Avatar Rounded Letter
      </Typography>
      <Avatar
        imageSource="green bowl_bea.png"
        letter="NA"
        imageAltProps="Avatar image source"
        iconImage={<IconAvatar data-testid={AvatarTestIds.AVATAR_ICON} />}
        color={AvatarColors.DEFAULT}
        variant="rounded"
        type={AvatarTypes.LETTER}
      />
      &nbsp;
      <Typography sx={{ color: 'rgba(0, 0, 0, 0.60);' }} variant="body1">
        Avatar Rounded Icon
      </Typography>
      <Avatar
        imageSource="green bowl_bea.png"
        letter="NA"
        imageAltProps="Avatar image source"
        iconImage={<IconAvatar data-testid={AvatarTestIds.AVATAR_ICON} />}
        color={AvatarColors.DEFAULT}
        variant="rounded"
        type={AvatarTypes.ICON}
      />
      &nbsp;
      <Typography sx={{ color: 'rgba(0, 0, 0, 0.60);' }} variant="body1">
        Avatar Rounded Image
      </Typography>
      <Avatar
        imageSource="green bowl_bea.png"
        letter="NA"
        imageAltProps="Avatar image source"
        iconImage={<IconAvatar data-testid={AvatarTestIds.AVATAR_ICON} />}
        color={AvatarColors.DEFAULT}
        variant="rounded"
        type={AvatarTypes.IMAGE}
      />
    </>
  );
};

const InteractiveExampleTemplate: StoryFn<typeof Avatar> = (args) => { return <Avatar {...args} />; };

export const InteractiveExample = InteractiveExampleTemplate.bind({});
InteractiveExample.parameters = {
  options: { showPanel: true },
};
InteractiveExample.args = {
  ...Avatar.defaultProps,
  // @ts-ignore - this attribute is need to disable all controls in the InteractiveExample, but this attribute is not part of the AvatarProps
  interactive: true,
  imageSource: 'green bowl_bea.png',
  letter: 'NA',
  imageAltProps: 'Avatar image source',
  iconImage: <IconAvatar data-testid={AvatarTestIds.AVATAR_ICON} />,
  variant: 'circular',
  type: AvatarTypes.IMAGE,
  color: AvatarColors.DEFAULT,
};

export const VisualTest = VisualTestTemplate.bind({});
VisualTest.parameters = {
  options: { showPanel: false },
};
VisualTest.args = {
  imageSource: 'green bowl_bea.png',
  letter: 'NA',
  imageAltProps: 'Avatar image source',
  iconImage: <IconAvatar data-testid={AvatarTestIds.AVATAR_ICON} />,
  color: AvatarColors.DEFAULT,
};
