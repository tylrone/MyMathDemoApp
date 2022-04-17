import React, { useState } from "react";
import { View, Text, TextInput, Button, TouchableOpacity } from "react-native";
import styles from "./style";

const MathInput = () => {

    const [question, setQuestion] = useState('aaa');

    return (
        <View style={styles.container}>
            <View style={styles.inputContainer}>
                <View style={{ height: '50%', borderWidth: 1, borderRadius: 5, borderColor: "rgba(0,0,0,0.5)" }}>
                    <TextInput
                        style={{}}
                        placeholder="Nhập câu hỏi tại đây"
                        editable
                        multiline
                        value={question}
                        onChangeText={setQuestion}
                    />
                </View>
                <View>
                    <TouchableOpacity>

                    </TouchableOpacity>
                </View>

            </View>
            <View style={styles.exampleContainer}>
                <TextInput />
            </View>
        </View>
    )
}
export default MathInput;