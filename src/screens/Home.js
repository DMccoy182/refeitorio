import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Button, StyleSheet, TextInput, View, Text } from 'react-native';

export function Home() {
	const [link, setLink] = useState("");

	function handleNew() {

		const id = 3;

		const newData = {
			id,
			link
		}


		// AsyncStorage.setItem("@savelink:link",JSON.stringify(newData));

		// console.log(newData);
	}


	return (
		<View style={styles.container}>
			<StatusBar style="auto" />
			{link.length > 0 && <>
			<View style={styles.containerE}>
				<Text>teste</Text>	
			</View>
			</>}

			{link.length == 0 && <>
				<View>
					<TextInput
						placeholder='Link'
						onChangeText={setLink}
					/>
				</View>

				<View style={styles.footer}>
					<Button title='Carregar' />
				</View>
			</>}
		</View>
	)
}



const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
	},
	containerE: {
		flex: 1,
		width: '100%',
		backgroundColor: '#FAF',
		alignItems: 'center',
		justifyContent: 'center',
	}
})
