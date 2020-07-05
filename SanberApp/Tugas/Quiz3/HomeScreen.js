import React from 'react';
import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity, Dimensions, TextInput, Button } from 'react-native';

import data from './data.json';

const DEVICE = Dimensions.get('window')

export default class HomeScreen extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      searchText: '',
      totalPrice: 0,
      userName : '' 
    }
  }

  currencyFormat(num) {
    return 'Rp ' + num.toFixed(0).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.')
  };

  updatePrice(price) {
    //? #Soal Bonus (10 poin) 
    //? Buatlah teks 'Total Harga' yang akan bertambah setiap kali salah satu barang/item di klik/tekan.
    //? Di sini, buat fungsi untuk menambahkan nilai dari state.totalPrice dan ditampilkan pada 'Total Harga'.
    
    // Kode di sini
    let totalPrice = this.state.totalPrice + parseInt(price)
    this.state.totalPrice = totalPrice;
  }


  render() {
    const userName = this.props.route.params.value;
    console.log(userName)
    return (
      <View style={styles.container}>
        <View style={{ minHeight: 50, width: DEVICE.width * 0.88 + 20, marginVertical: 8 }}>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <Text>Hai,{'\n'}
            {/* //? #Soal 1 Tambahan, Simpan userName yang dikirim dari halaman Login pada komponen Text di bawah ini */}
              <Text style={styles.headerText}>{userName}</Text>
            </Text>

            {/* //? #Soal Bonus, simpan Total Harga dan state.totalPrice di komponen Text di bawah ini */}
            <Text style={{ textAlign: 'right' }}>Total Harga{'\n'}
              <Text style={styles.headerText}>{this.state.totalPrice}</Text>
            </Text>
          </View>
          <View>

          </View>
          <TextInput
            style={{ backgroundColor: 'white', marginTop: 8 }}
            placeholder='Cari barang..'
            onChangeText={(searchText => this.setState({ searchText }))}
          />
        </View>

        {/* 
        //? #Soal No 2 (15 poin)
        //? Buatlah 1 komponen FlatList dengan input berasal dari data.json
        //? dan pada prop renderItem menggunakan komponen ListItem -- ada di bawah --
        //? dan memiliki 2 kolom, sehingga menampilkan 2 item per baris (horizontal)

        // Lanjutkan di bawah ini!
        */}
        
        <FlatList
          data={data.produk}
          renderItem={(video)=><ListItem data={video.item} updatePrice={this.updatePrice} state={this.state}/>}
          keyExtractor={(item)=>item.id.toString()}
          ItemSeparatorComponent={()=><View style={{height:20,backgroundColor:'#E5E5E5'}}/>}
        />

      </View>
    )
  }
};

class ListItem extends React.Component {

  currencyFormat(num) {
    return 'Rp ' + num.toFixed(0).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.')
  };

  //? #Soal No 3 (15 poin)
  //? Buatlah styling komponen ListItem, agar dapat tampil dengan baik di device

  render() {
    const data = this.props.data
    return (
      <View style={styles.itemContainer}>
        <Image source={{ uri: data.gambaruri }} style={styles.itemImage} resizeMode='contain' />
        <Text numberOfLines={2} ellipsizeMode='tail' style={styles.itemName} >{data.nama}</Text>
        <Text style={styles.itemPrice}>{this.currencyFormat(Number(data.harga))}</Text>
        <Text style={styles.itemStock}>Sisa stok: {data.stock}</Text>
        <Button style={styles.itemButton} title='BELI' onPress={() => this.props.updatePrice(data.harga)}/>
      </View>
    )
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerText: {
    fontSize: 18,
    fontWeight: 'bold'
  },

  //? Lanjutkan styling di sini
  itemContainer: {
    width: DEVICE.width * 0.8,
    backgroundColor : '#ddeded',
    padding : 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  itemImage: {
    width: 100, 
    height: 50
  },
  itemName: {
    fontSize:20,
    fontWeight:'bold',
    color:'#4b80bd'
  },
  itemPrice: {
    fontSize:15,
    fontWeight:'bold',
    color:'#506c8c'
  },
  itemStock: {
    fontSize:15,
    fontWeight:'bold',
    color:'#2c3f54'
  },
  itemButton: {
    width: 200, 
    height: 50,
    color : '#ddeded',
  },
  buttonText: {
    fontSize:15,
    fontWeight:'bold',
    color:'#111a24'
  }
})
