import React, { Component } from "react";
import { View, TouchableWithoutFeedback, TouchableHighlight, Text, StyleSheet } from "react-native";

const defaultColor = "#737373";
const defaultBgColor = "#fff";
const defaultSelectedColor = "#50d2c2";
const defaultSelectedBgColor = "#ffffff";
const defaultSize = 16;

class CNToolbar extends Component {

    constructor(props) {
        super(props);
    }

    onStyleKeyPress(toolItem) {
        if (this.props.onStyleKeyPress)
            this.props.onStyleKeyPress(toolItem);
    }

    renderStyleButtons(size, color, bgColor, selectedColor, selectedBgColor) {
        const {
            selectedStyles, selectedTag, bold, iconContainerStyle,
            italic,
            underline,
            lineThrough,
            title,
            heading,
            ul,
            ol,
            highlight,
            body,
            foreColor
        } = this.props;
        const iconStyles = [styles.iconContainer, iconContainerStyle];
        return (
            <View style={[styles.iconSetContainer, { flexGrow: 2, marginLeft: 35 }]}>
                {
                    bold
                        ? (
                            <TouchableWithoutFeedback
                                style={{flex: 1}}
                                onPress={() => {
                                    this.onStyleKeyPress("bold");
                                }}
                            >
                                <View style={[iconStyles, {
                                    backgroundColor: selectedStyles.indexOf("bold") >= 0 ? selectedBgColor : bgColor
                                }]}
                                >
                                    {
                                        React.cloneElement(bold, {
                                            size,
                                            color: selectedStyles.indexOf("bold") >= 0 ? selectedColor : color
                                        })
                                    }
                                </View>

                            </TouchableWithoutFeedback>
                        )
                        : null
                }
                {
                    italic
                        ? (
                            <TouchableWithoutFeedback
                                style={{flex: 1}}
                                onPress={() => {
                                    this.onStyleKeyPress("italic");
                                }}
                            >
                                <View style={[iconStyles,
                                    {
                                        backgroundColor: selectedStyles.indexOf("italic") >= 0 ? selectedBgColor : bgColor
                                    }]}
                                >
                                    {
                                        React.cloneElement(italic, {
                                            size,
                                            color: selectedStyles.indexOf("italic") >= 0 ? selectedColor : color
                                        })
                                    }
                                </View>
                            </TouchableWithoutFeedback>
                        )
                        : null
                }
                {
                    underline
                        ? (
                            <TouchableWithoutFeedback
                                style={{flex: 1}}
                                onPress={() => {
                                    this.onStyleKeyPress("underline");
                                }}
                            >
                                <View style={[iconStyles,
                                    {
                                        backgroundColor: selectedStyles.indexOf("underline") >= 0 ? selectedBgColor : bgColor
                                    }]}
                                >
                                    {
                                        React.cloneElement(underline, {
                                            size,
                                            color: selectedStyles.indexOf("underline") >= 0 ? selectedColor : color
                                        })
                                    }
                                </View>
                            </TouchableWithoutFeedback>
                        )
                        : null
                }
                {
                    lineThrough
                        ? (
                            <TouchableWithoutFeedback
                                style={{flex: 1}}
                                onPress={() => {
                                    this.onStyleKeyPress("lineThrough");
                                }}
                            >
                                <View style={[iconStyles,
                                    {
                                        backgroundColor: selectedStyles.indexOf("lineThrough") >= 0 ? selectedBgColor : bgColor
                                    }]}
                                >
                                    {
                                        React.cloneElement(lineThrough, {
                                            size,
                                            color: selectedStyles.indexOf("lineThrough") >= 0 ? selectedColor : color
                                        })
                                    }
                                </View>
                            </TouchableWithoutFeedback>
                        )
                        : null
                }
                {body
                    ? (
                        <TouchableWithoutFeedback
                            style={{flex: 1}}
                            onPress={() => {
                                this.onStyleKeyPress("body");
                            }}
                        >
                            <View style={[iconStyles,
                                {
                                    backgroundColor: selectedTag === "body" ? selectedBgColor : bgColor
                                }]}
                            >
                                {
                                    React.cloneElement(body, {
                                        size,
                                        color: selectedTag === "body" ? selectedColor : color
                                    })
                                }
                            </View>
                        </TouchableWithoutFeedback>
                    )
                    : null
                }
                {
                    title

                        ? (
                            <TouchableWithoutFeedback
                                style={{flex: 1}}
                                onPress={() => {
                                    this.onStyleKeyPress("title");
                                }}
                            >
                                <View style={[iconStyles,
                                    {
                                        backgroundColor: selectedTag === "title" ? selectedBgColor : bgColor
                                    }]}
                                >
                                    {
                                        React.cloneElement(title, {
                                            size,
                                            color: selectedTag === "title" ? selectedColor : color
                                        })
                                    }
                                </View>
                            </TouchableWithoutFeedback>
                        )
                        : null
                }
                {
                    heading
                        ? (
                            <TouchableWithoutFeedback
                                style={{flex: 1}}
                                onPress={() => {
                                    this.onStyleKeyPress("heading");
                                }}
                            >
                                <View style={[iconStyles,
                                    {
                                        backgroundColor: selectedTag === "heading" ? selectedBgColor : bgColor
                                    }]}
                                >
                                    {
                                        React.cloneElement(heading, {
                                            size,
                                            color: selectedTag === "heading" ? selectedColor : color
                                        })
                                    }
                                </View>
                            </TouchableWithoutFeedback>
                        )
                        : null
                }
                {
                    ul
                        ? (
                            <TouchableWithoutFeedback
                                style={{flex: 1}}
                                onPress={() => {
                                    this.onStyleKeyPress("ul");
                                }}
                            >
                                <View style={[iconStyles,
                                    {
                                        backgroundColor: selectedTag === "ul" ? selectedBgColor : bgColor
                                    }]}
                                >
                                    {
                                        React.cloneElement(ul, {
                                            size,
                                            color: selectedTag === "ul" ? selectedColor : color
                                        })
                                    }
                                </View>
                            </TouchableWithoutFeedback>
                        )
                        : null
                }
                {
                    ol
                        ? (
                            <TouchableWithoutFeedback
                                style={{flex: 1}}
                                onPress={() => {
                                    this.onStyleKeyPress("ol");
                                }}
                            >
                                <View style={[iconStyles,
                                    {
                                        backgroundColor: selectedTag === "ol" ? selectedBgColor : bgColor
                                    }]}
                                >
                                    {
                                        React.cloneElement(ol, {
                                            size,
                                            color: selectedTag === "ol" ? selectedColor : color
                                        })
                                    }
                                </View>
                            </TouchableWithoutFeedback>
                        )
                        : null
                }
                {highlight
                    ? (
                        <TouchableWithoutFeedback
                            style={{flex: 1}}
                            onPress={() => {
                                this.onStyleKeyPress("highlight");
                            }}
                        >
                            <View style={[iconStyles,
                                {
                                    backgroundColor: selectedStyles.indexOf("highlight") >= 0 ? selectedBgColor : bgColor
                                }]}
                            >
                                {
                                    React.cloneElement(highlight, {
                                        size,
                                        color: selectedStyles.indexOf("highlight") >= 0 ? selectedColor : color
                                    })
                                }
                            </View>

                        </TouchableWithoutFeedback>
                    )
                    : null
                }
                {
                    foreColor
                        ? (
                            <TouchableWithoutFeedback
                                style={{flex: 1}}
                                onPress={() => {
                                    this.onStyleKeyPress("foreColor");
                                }}
                            >
                                <View style={[iconStyles,
                                    {
                                        backgroundColor: selectedStyles.indexOf("foreColor") >= 0 ? selectedBgColor : bgColor
                                    }]}
                                >
                                    {
                                        React.cloneElement(foreColor, {
                                            size,
                                            color: selectedStyles.indexOf("foreColor") >= 0 ? selectedColor : color
                                        })
                                    }
                                </View>
                            </TouchableWithoutFeedback>
                        )
                        : null
                }

            </View>
        );
    }

    renderTagButtons(size, color, bgColor, selectedColor, selectedBgColor) {
        const {
            selectedStyles, selectedTag, title,
            heading, iconContainerStyle,
            ul,
            ol,
            body
        } = this.props;
        const iconStyles = [styles.iconContainer, iconContainerStyle];

        return (
            <View style={[styles.iconSetContainer, { flexGrow: 1, marginLeft: 10 }]}>
                |
            </View>
        );
    }

    render() {
        const {
            selectedStyles, selectedTag,
            bold, italic, underline, lineThrough,
            title, heading, ul, ol, body,
            image, foreColor, highlight, style
        } = this.props;

        const styleButtons = !bold && !italic && !underline && !lineThrough;
        const tagButtons = !title && !heading && !ul && !ol && !body;
        const extraButtons = !image && !foreColor && !highlight;

        const size = this.props.size ? this.props.size : defaultSize;
        const color = this.props.color ? this.props.color : defaultColor;
        const bgColor = this.props.backgroundColor ? this.props.backgroundColor : defaultBgColor;
        const selectedColor = this.props.selectedColor ? this.props.selectedColor : defaultSelectedColor;
        const selectedBgColor = this.props.selectedBackgroundColor ? this.props.selectedBackgroundColor : defaultSelectedBgColor;

        return (
            <View style={[styles.toolbarContainer, style]}>
                {this.renderStyleButtons(size, color, bgColor, selectedColor, selectedBgColor)}
            </View>
        );
    }
}


const styles = StyleSheet.create({
    icon: {
        top: 2
    },
    iconContainer: {
        borderRadius: 3,
        alignItems: "flex-start",
        justifyContent: "flex-start",
    },
    iconSetContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingTop: 2,
        paddingBottom: 2,
        paddingLeft: 3,
        paddingRight: 3,
        flex: 1
    },
    toolbarContainer: {
        flexDirection: "row",
        justifyContent: "flex-start",
        width: null,
        alignSelf: "center",
        borderWidth: 1,
        borderColor: defaultSelectedBgColor,
        borderRadius: 4,
        padding: 2,
        paddingRight: 50,
        backgroundColor: "#fff"
    },
    separator: {
        width: 2,
        marginTop: 1,
        marginBottom: 1,
        backgroundColor: defaultSelectedBgColor
    }
});

export default CNToolbar;
