import { MantineThemeOverride } from '@mantine/core';
import { COLOR_PALETTE } from './styling/ColorPalette';
import { STYLING_VARIABLES } from './styling/StylingVariables';

/**
 * Styling for the App Component.
 */
export const APP_STYLING = {
    rootStyles: {
        height: '100vh',
    } as React.CSSProperties,

    contentRootStyles: {
        width: '100%',
        height: `calc(100% - ${STYLING_VARIABLES.headerHeight})`,

        overflowY: 'auto',
    } as React.CSSProperties,

    contentStyles: {
        width: '100%',
        maxWidth: `${STYLING_VARIABLES.maxContentWidth}`,
        height: '100%',
    } as React.CSSProperties,
};

/**
 * Styling for Mantine Components in the app.
 */
export const mantineTheme: MantineThemeOverride = {
    fontSizes: {
        xs: '0.75rem',
        sm: '0.875rem',
        md: '1rem',
        lg: '1.125rem',
        xl: '1.25rem',
    },
    components: {
        Button: {
            styles: {
                root: {
                    color: COLOR_PALETTE.light.default.textColorPrimary,
                    backgroundColor: COLOR_PALETTE.light.default.kellyGreen,

                    fontSize: `${STYLING_VARIABLES.defaultBodyFontSize}`,

                    maxWidth: '500px',

                    '&:not([data-disabled]):hover': {
                        backgroundColor: COLOR_PALETTE.light.default.kellyGreenHover,
                    },

                    '&:focus': {
                        borderColor: COLOR_PALETTE.light.default.kellyGreen,
                    },
                },
            },
        },

        Paper: {
            styles: {
                root: {
                    borderColor: COLOR_PALETTE.light.default.borderColor,
                },
            },
        },

        Drawer: {
            styles: {
                drawer: {
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                },
                header: {
                    width: '100%',
                    maxWidth: `${STYLING_VARIABLES.maxContentWidth}`,

                    fontSize: `${STYLING_VARIABLES.defaultBodyFontSize}`,
                },
                body: {
                    width: '100%',
                    maxWidth: `${STYLING_VARIABLES.maxContentWidth}`,
                },
                inner: {
                    padding: '0',
                },
            },
        },

        Modal: {
            styles: {
                title: {
                    fontSize: `${STYLING_VARIABLES.defaultTitleFontSize}`,
                },
                close: {
                    fontSize: `${STYLING_VARIABLES.defaultTitleFontSize}`,
                },
                body: {
                    fontSize: `${STYLING_VARIABLES.defaultBodyFontSize}`,
                },
                // I have no idea why the paddingRight does not apply, but removing all horizontal padding fixes the issue.
                inner: {
                    padding: '5vh 0',
                },
            },
        },

        TextInput: {
            styles: {
                label: {
                    fontSize: `${STYLING_VARIABLES.defaultBodyFontSize}`,
                },
                input: {
                    fontSize: `${STYLING_VARIABLES.defaultBodyFontSize}`,

                    '&:focus': {
                        borderColor: COLOR_PALETTE.light.default.kellyGreen,
                    },
                },
            },
        },

        Select: {
            styles: {
                label: {
                    fontSize: `${STYLING_VARIABLES.defaultBodyFontSize}`,
                },
                input: {
                    fontSize: `${STYLING_VARIABLES.defaultBodyFontSize}`,

                    '&:focus': {
                        borderColor: COLOR_PALETTE.light.default.kellyGreen,
                    },
                },
                item: {
                    fontSize: `${STYLING_VARIABLES.defaultBodyFontSize}`,

                    '&[data-selected]': {
                        color: COLOR_PALETTE.light.default.textColorPrimary,
                        backgroundColor: COLOR_PALETTE.light.default.kellyGreen,

                        '&:hover': {
                            backgroundColor: COLOR_PALETTE.light.default.kellyGreenHover,
                        },
                    },
                },
                separatorLabel: {
                    fontSize: `${STYLING_VARIABLES.defaultBodyFontSize}`,
                },
            },
        },

        NumberInput: {
            styles: {
                label: {
                    fontSize: `${STYLING_VARIABLES.defaultBodyFontSize}`,
                },
                input: {
                    fontSize: `${STYLING_VARIABLES.defaultBodyFontSize}`,

                    '&:focus': {
                        borderColor: COLOR_PALETTE.light.default.kellyGreen,
                    },
                },
            },
        },

        Accordion: {
            styles: {
                control: {
                    backgroundColor: COLOR_PALETTE.light.default.accordionBackground,

                    '&:hover': {
                        backgroundColor: COLOR_PALETTE.light.default.accordionBackgroundHover,
                    },
                },
                label: {
                    fontWeight: 'bold',
                    fontSize: `${STYLING_VARIABLES.defaultBodyFontSize}`,
                    color: COLOR_PALETTE.light.default.accordionText,
                },
                chevron: {
                    color: COLOR_PALETTE.light.default.accordionText,
                },
            },
            defaultProps: {
                radius: 'md',
                variant: 'contained',
            },
        },

        DatePickerInput: {
            styles: {
                label: {
                    fontSize: `${STYLING_VARIABLES.defaultBodyFontSize}`,
                },
                input: {
                    fontSize: `${STYLING_VARIABLES.defaultBodyFontSize}`,

                    '&:focus': {
                        borderColor: COLOR_PALETTE.light.default.kellyGreen,
                    },
                },
                day: {
                    '&[data-in-range]': {
                        backgroundColor: COLOR_PALETTE.light.default.kellyGreenActive,

                        '&:hover': {
                            backgroundColor: COLOR_PALETTE.light.default.kellyGreenHover,
                        },
                    },

                    '&[data-selected]': {
                        color: COLOR_PALETTE.light.default.textColorPrimary,
                        backgroundColor: COLOR_PALETTE.light.default.kellyGreen,

                        '&:hover': {
                            backgroundColor: COLOR_PALETTE.light.default.kellyGreenHover,
                        },
                    },
                },
            },
        },

        Stepper: {
            styles: {
                stepLabel: {
                    fontSize: `${STYLING_VARIABLES.defaultBodyFontSize}`,
                },
                stepDescription: {
                    fontSize: `${STYLING_VARIABLES.defaultBodyFontSize}`,
                },
                stepIcon: {
                    color: COLOR_PALETTE.light.default.textColorPrimary,

                    backgroundColor: COLOR_PALETTE.light.default.grayBackground,

                    borderColor: COLOR_PALETTE.light.default.grayBackground,

                    '&[data-progress]': {
                        borderColor: COLOR_PALETTE.light.default.kellyGreen,
                    },

                    '&[data-completed]': {
                        backgroundColor: COLOR_PALETTE.light.default.kellyGreen,

                        borderColor: COLOR_PALETTE.light.default.kellyGreen,
                    },
                },
                separator: {
                    backgroundColor: COLOR_PALETTE.light.default.grayBackground,
                },
                separatorActive: {
                    backgroundColor: COLOR_PALETTE.light.default.kellyGreen,
                },
            },
        },

        Avatar: {
            styles: {
                placeholder: {
                    color: COLOR_PALETTE.light.default.textColorPrimary,
                    backgroundColor: COLOR_PALETTE.light.default.grayBackground,
                },
            },
        },

        Checkbox: {
            styles: {
                input: {
                    borderColor: COLOR_PALETTE.light.default.borderColor,

                    '&:hover': {
                        borderColor: COLOR_PALETTE.light.default.kellyGreen,

                        cursor: 'pointer',
                    },

                    '&:checked': {
                        borderColor: COLOR_PALETTE.light.default.kellyGreen,

                        backgroundColor: COLOR_PALETTE.light.default.kellyGreen,

                        '&:hover': {
                            borderColor: COLOR_PALETTE.light.default.kellyGreenHover,

                            backgroundColor: COLOR_PALETTE.light.default.kellyGreenHover,

                            cursor: 'pointer',
                        },
                    },
                },
            },
        },

        ActionIcon: {
            styles: {
                root: {
                    color: COLOR_PALETTE.light.default.textColorPrimary,
                },
            },
        },

        Card: {
            styles: {
                root: {
                    '&[data-with-border]': {
                        borderColor: COLOR_PALETTE.light.default.borderColor,
                    },
                },
            },
        },

        Tabs: {
            styles: {
                tabLabel: {
                    fontSize: `${STYLING_VARIABLES.defaultBodyFontSize}`,
                },
            },
        },

        PasswordInput: {
            styles: {
                input: {
                    '&:focus, &:focus-within': {
                        borderColor: COLOR_PALETTE.light.default.kellyGreen,
                    },
                },
            },
        },
    },
};
