import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React from 'react';
import { useRouter } from 'expo-router';

const Home = () => {
    const router = useRouter();

    return (
        <View style={styles.container}>
            <View style={styles.textContainer}>
                <Text style={styles.header}>
                    Welcome!
                </Text>
                <Text style={styles.subText}>
                    This is a Journaling App with Authentication. Login or Register to track your Journals!
                </Text>
            </View>

            <View style={styles.buttonsContainer}>
                <TouchableOpacity 
                    style={styles.button}
                    onPress={() => router.push("/auth/login")}
                >
                    <Text style={styles.buttonText}>Login</Text>
                </TouchableOpacity>

                <TouchableOpacity 
                    style={styles.button}
                    onPress={() => router.push("/auth/register")}
                >
                    <Text style={styles.buttonText}>Register</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default Home

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems:"center",
        backgroundColor: "#F1F1F1",
        padding: 20
    },
    textContainer: {
        paddingBottom: 20,
    },
    header: {
        fontSize: 48,
        paddingBottom: 10,
        textAlign:"center"
    },
    subText: {
        fontSize: 18,
        lineHeight: 24,
        textAlign:"center"
    },
    buttonsContainer: {
        gap: 20,
        flexDirection: "row",
        alignItems: "center"
    },
    button: {
        paddingVertical: 12,
        paddingHorizontal: 24,
        backgroundColor: "#006400",
        borderRadius: 25
    },
    buttonText: {
        color: "#FFFFFF",
        fontSize: 18,
    }
})