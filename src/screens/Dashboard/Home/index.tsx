import React, { useEffect, useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TextInput,
  ScrollView,
  Image,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import styles from './styles';
import images from '../../../assets/images';
import { Icons } from '../../../assets/icons';
import { getCategories } from '../../../api/auth';
import {Strings} from '../../../assets/strings';
// import { Icons } from '../../../assets/icons';

type Category= {
  name: string;
  photo: string | null;
}
const HomeScreen = () => {

  const [categories, setCategories] = useState([])

  const getCategoriesApi = async () => {
    const res = await getCategories();
    console.log('resultChange', res?.data?.data);
    setCategories(res?.data?.data);
  }
  useEffect(() => {
    getCategoriesApi()
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        {/* Header */}
        <View style={styles.header}>
          {/* <Text style={styles.logo}>Stylish</Text> */}
          <Image
            source={images.home.logo}
            style={styles.logoIcon}
          />
          <Image
            source={{ uri: 'https://i.pravatar.cc/100' }}
            style={styles.profileIcon}
          />
        </View>

        {/* Search Bar */}
        <View style={styles.searchBar}>
          {/* <Search */}
          <Icons.Search/>
          <TextInput
            placeholder={Strings.home.searchPlaceholder}
            style={styles.searchInput}
          />
        </View>

        {/* Category Scroll */}
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.categories}>
          <FlatList<Category>
            style={styles.categories}
            horizontal
            data={categories}
            renderItem={({item, index}) => {
              return(
                <View key={index} style={styles.categoryItem}>
              {
                item.photo !== null && (
                  <Image source={{uri: item?.photo}} 
                  resizeMode='cover'
                  style={{
                    height: 50,
                    width: 50,
                    borderRadius: 100,
                    // backgroundColor: 'red'
                  }}/>
                )
              }
              <Text style={styles.categoryText}>{item.name}</Text>
            </View>
              )
            }}
            refreshing={true}
            // onRefresh={}
          />
        </ScrollView>

        {/* Banner */}
        <View style={styles.banner}>
          <View>
            <Text style={styles.bannerText}>50-40% OFF</Text>
            <Text style={styles.subText}>Now in (product)</Text>
            <Text style={styles.subText}>All colours</Text>
            <TouchableOpacity style={styles.shopNowBtn}>
              <Text style={styles.shopNowText}>Shop Now →</Text>
            </TouchableOpacity>
          </View>
          <Image
            source={{ uri: 'https://i.imgur.com/UPrs1EWl.jpg' }}
            style={styles.bannerImg}
          />
        </View>

        {/* Deal of the Day */}
        <View style={styles.dealBox}>
          <Text style={styles.dealTitle}>Deal of the Day</Text>
          <Text style={styles.timer}>⏳ 22h 55m 20s remaining</Text>
          <TouchableOpacity style={styles.viewAllBtn}>
            <Text style={styles.viewAllText}>View all →</Text>
          </TouchableOpacity>
        </View>

        {/* Product Grid */}
        <View style={styles.productGrid}>
          {[
            {
              title: 'Women Printed Kurta',
              price: '₹1500',
              oldPrice: '₹2499',
              discount: '40%Off',
              rating: '56890',
              image: 'https://i.imgur.com/5Aqgz7o.jpg',
            },
            {
              title: 'HRX by Hrithik Roshan',
              price: '₹2499',
              oldPrice: '₹4999',
              discount: '50%Off',
              rating: '344567',
              image: 'https://i.imgur.com/9GUj1pE.jpg',
            },
          ].map((item, index) => (
            <View key={index} style={styles.productCard}>
              <Image source={{ uri: item.image }} style={styles.productImage} />
              <Text style={styles.productTitle}>{item.title}</Text>
              <Text style={styles.productDesc}>
                Neque porro quisquam est qui dolorem ipsum quia
              </Text>
              <Text style={styles.productPrice}>
                {item.price}{' '}
                <Text style={styles.oldPrice}>{item.oldPrice}</Text>{' '}
                <Text style={styles.discount}>{item.discount}</Text>
              </Text>
              <Text style={styles.rating}>⭐ {item.rating}</Text>
            </View>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;