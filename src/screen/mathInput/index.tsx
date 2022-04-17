import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  Button,
  TouchableOpacity,
  FlatList,
  Keyboard,
} from 'react-native';
import styles from './style';

interface DATA_INTERFACE {
  key: number;
  title: string;
  value: string;
}
const DATA: DATA_INTERFACE[] = [
  {key: 0, title: 'Bài 1', value: 'đề bài'},
  {key: 1, title: 'Bài 2', value: 'đề bài'},
  {key: 2, title: 'Bài 3', value: 'đề bài'},
];

const MathInput = () => {
  const navigation = useNavigation();

  const [question, setQuestion] = useState('');

  const renderData = (item: DATA_INTERFACE) => {
    return (
      <TouchableOpacity style={styles.itemMauDV}>
        <Text style={styles.titleMauDV}>{item.title}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <View style={styles.textInputContainer}>
          <TextInput
            style={{flex: 1}}
            placeholder="Nhập câu hỏi tại đây"
            editable
            multiline
            value={question}
            onChangeText={setQuestion}
          />
        </View>
        <View>
          <TouchableOpacity
            style={styles.btnGiai}
            onPress={() => {
              Keyboard.dismiss();
              navigation.navigate('MathOutput');
            }}>
            <Text style={styles.titleBtn}>Giải</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.exampleContainer}>
        <View style={styles.duongPC}></View>
        <View>
          <Text style={styles.mauDV}>Mẫu đầu vào:</Text>
        </View>
        <View style={styles.mauBT}>
          <FlatList
            data={DATA}
            keyExtractor={item => item.key.toString()}
            renderItem={({item}) => renderData(item)}
          />
        </View>
      </View>
    </View>
  );
};
export default MathInput;
