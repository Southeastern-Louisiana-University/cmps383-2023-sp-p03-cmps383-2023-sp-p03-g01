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

                    fontSize: `${STYLING_VARIABLES.defaultTitleFontSize}`,
                },
                body: {
                    width: '100%',
                    maxWidth: `${STYLING_VARIABLES.maxContentWidth}`,
                },
            },
        },

        Modal: {
            styles: {
                header: {
                    fontSize: `${STYLING_VARIABLES.defaultTitleFontSize}`,
                },
                body: {
                    fontSize: `${STYLING_VARIABLES.defaultBodyFontSize}`,
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
                    fontSize: `${STYLING_VARIABLES.defaultTitleFontSize}`,

                    color: COLOR_PALETTE.light.default.textColorPrimary,

                    backgroundColor: COLOR_PALETTE.light.default.kellyGreen,

                    '&:hover': {
                        backgroundColor: COLOR_PALETTE.light.default.kellyGreenHover,
                    },
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
    },
};
