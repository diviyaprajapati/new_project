import { View, Text, TouchableOpacity, Modal, StyleSheet } from "react-native";
import { useState } from "react";
import { router } from "expo-router";

export default function Header() {

    const [visible, setVisible] = useState(false);

    return (
        <View style={styles.header}>

            {/* Menu Button */}
            <TouchableOpacity onPress={() => setVisible(true)}>
                <Text style={styles.icon}>☰</Text>
            </TouchableOpacity>

            <Text style={styles.title}>My App</Text>

            <Text style={styles.icon}>👤</Text>

            {/* Modal */}
            <Modal visible={visible} transparent animationType="slide">
                <View style={styles.modalContainer}>

                    <View style={styles.modalBox}>

                        <TouchableOpacity
                            onPress={() => {
                                router.push("/component/Form");
                                setVisible(false);
                            }}
                        >
                            <Text style={styles.option}>Home Page</Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                            onPress={() => {
                                router.push("/component/post");
                                setVisible(false);
                            }}
                        >
                            <Text style={styles.option}>Post Page</Text>
                        </TouchableOpacity>

                    </View>

                </View>
            </Modal>

        </View>
    );
}

const styles = StyleSheet.create({
    header: {
        height: 60,
        backgroundColor: "#2196F3",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingHorizontal: 15,
    },

    title: {
        color: "white",
        fontSize: 18,
    },

    icon: {
        color: "white",
        fontSize: 22,
    },

    modalContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "rgba(0,0,0,0.5)",
    },

    modalBox: {
        width: 200,
        backgroundColor: "white",
        padding: 20,
        borderRadius: 10,
    },

    option: {
        fontSize: 18,
        marginVertical: 10,
    },
});