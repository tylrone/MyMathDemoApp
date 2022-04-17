import React, {useState} from 'react';
import {View, Text, ScrollView} from 'react-native';
import styles from './style';

const MathOutput = () => {
  const [result, setResult] = useState(
    `Dear Developer, We identified one or more issues with a recent delivery for your app, "GG Live" 1.0.6 (42). Your delivery was successful, but you may wish to correct the following issues in your next delivery:ITMS-90076: Potential Loss of Keychain Access - The previous version of software has an application-identifier value of ['FKH6TT2XKM.com.boxvn.gglive'] and the new version of software being submitted has an application-identifier of [67ZS9U23DL.com.boxvn.gglive]. This will result in a loss of keychain access.After you’ve corrected the issues, you can upload a new binary to App Store Connect.Best regards,The App Store Team`,
  );

  return (
    <ScrollView style={styles.container}>
      <View>
        <Text style={styles.titleLoiGiai}>{`${result}`}</Text>
      </View>
    </ScrollView>
  );
};
export default MathOutput;
