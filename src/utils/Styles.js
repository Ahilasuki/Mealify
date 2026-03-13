import { StyleSheet,Dimensions } from "react-native";
import Colors from "./Colors";

const screenWidth = Dimensions.get('window').width;

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    
    backgroundColor: Colors.primary_color,
  },
  text: {
    color: Colors.secondary_color,
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "justify", 
    paddingHorizontal: 25,
    marginTop: 20,
    fontStyle: "italic", 
  },
  subtitle: {
        fontSize: 16,
        textAlign: 'center',
    },
  searchBarContainer: {
    flexDirection: 'row',
    alignItems: 'center', 
    marginHorizontal: 16,
    marginBottom: 16, 
    marginTop: 15,
  },
 logo: {
    width: 40,         
    height: 40,
    borderRadius: 20,   
    backgroundColor: '#DEFAF8', 
  },
  title: { fontSize: 24, fontWeight: 'bold', color: '#333' },
  searchInput: {
    flex: 1,           
    height: 40,   
    backgroundColor: Colors.white_color, 
    borderRadius: 15,   
    paddingHorizontal: 16,
    color: Colors.secondary_color, 
    marginLeft: 12,     
   
  },
  loader: { marginTop: 50 },
  errorText: { color: 'red', textAlign: 'center', marginTop: 20 },
  emptyText: { textAlign: 'center', marginTop: 50, color: 'gray' },
  emptySubText: { textAlign: 'center', marginTop: 10, color: Colors.black_color, fontSize: 14 },
  listContainer: { paddingHorizontal: 16, paddingBottom: 20 },
  card: { 
    width: '48%', 
    backgroundColor: '#fff', 
    marginBottom: 16, 
    borderRadius: 12, 
    padding: 12, 
    elevation: 3, 
    shadowColor: '#000', 
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  imageContainer: {
    position: 'relative',
  },
  cardImage: { 
    width: '100%', 
    height: 120, 
    borderRadius: 8, 
  },
  favoriteButton: {
    position: 'absolute',
    top: 6,
    right: 6,
    backgroundColor: 'rgba(255, 255, 255, 0.9)', 
    borderRadius: 20,
    padding: 6,
    elevation: 5, 
  },
  cardInfo: { 
    paddingVertical: 8,
    paddingHorizontal: 4, 
  },
  mealName: { 
    fontSize: 16, 
    fontWeight: '600', 
    color: '#333', 
   
  },
  mealCategory: { 
    fontSize: 12, 
    color: '#666' 
  },
  row: {
    justifyContent: 'space-between',
  },
  favourite_container:{
    flex:1,
    backgroundColor:Colors.primary_color,
  },
favorite_title:{
  fontSize:20,
  fontWeight:'bold',
  color:Colors.secondary_color,
  textAlign:'center',
  marginVertical:20,
},
 detail_container: { flex: 1, backgroundColor: Colors.primary_color },
sectionTitle: { fontSize: 18, fontWeight: 'bold', color: '#1E7B9D', marginTop: 15, marginBottom: 10 },
  ingredientText: { fontSize: 14, color: '#444', marginBottom: 5, lineHeight: 20 },
  instructionsText: { fontSize: 14, color: '#444', lineHeight: 20, marginTop: 5 },
center: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  image: { width: '100%', height: 300, resizeMode: 'cover' },
  content: { padding: 20, borderTopLeftRadius: 30, borderTopRightRadius: 30, backgroundColor: Colors.primary_color, marginTop: -30 },
  headerRow: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  detail_title: { fontSize: 24, fontWeight: 'bold', color: '#333', flex: 1 },
  detail_subtitle: { fontSize: 16, color: '#666', marginTop: 5, marginBottom: 20 },
  tabContainer: {
    flexDirection: 'row',
    backgroundColor: '#FFFFFF', 
    borderRadius: 10,         
    marginHorizontal: 16,
    marginBottom: 10,
                   
    elevation: 2,               
    shadowColor: '#000',       
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  tabButton: {
    flex: 1,                    
    paddingVertical: 8,
            borderRadius: 10,   
    alignItems: 'center',
    justifyContent: 'center',
  },
  activeTabButton: {
    backgroundColor: Colors.secondary_color, 
  },
  tabText: {
    color:Colors.secondary_color,     
    fontSize: 14,
    fontWeight: '500',
  },
  activeTabText: {
    color: Colors.white_color,          
    fontWeight: 'bold',
  },
  paginationContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10, 
  },
  dot: {
    height: 8,
    borderRadius: 4,
    marginHorizontal: 4,
  },
  activeDot: {
    width: 20, 
    backgroundColor: '#1E7B9D', 
  },
  inactiveDot: {
    width: 8, 
    backgroundColor: '#1E7B9D40', 
  },
  // --- Carousel Styles ---
  carouselWrapper: {
    height: '27%', 
    marginBottom: 20,
  },
  carouselItemContainer: {

    width: screenWidth, 
    alignItems: 'center',
    resizeMode:'contain'
  },
  carouselImage: {
    
    height: '100%',
    borderRadius: 20,        
    resizeMode: 'contain', 
  },
});