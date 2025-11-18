// import Header from '@/components/Header';
// import { useMealSwipeData } from '@/hooks/use-meal-swipe-data';
// import React, { memo, useCallback, useMemo, useState } from 'react';
// import { FlatList, Pressable, StyleSheet, Text, View } from 'react-native';
// import { SafeAreaView } from 'react-native-safe-area-context';

// // ---------- Utilities ----------
// // const CURRENCY = new Intl.NumberFormat('en-US', {
// //   style: 'currency',
// //   currency: 'USD',
// //   maximumFractionDigits: 2,
// // });


// const sectionTotal = (section) => section.data.reduce((sum, t) => sum + (t.amount || 0), 0);

// // ---------- Styling ----------
// const TAG_STYLES = {
//   Starbucks: { bg: '#0e572fff', text: '#dcf1e5ff' },
//   LP:        { bg: '#E0F2FE', text: '#075985' },
//   CFA:       { bg: '#871616ff', text: '#f7e8dfff' },
//   Jones:     { bg: '#e5e5a2ff', text: '#9f3729ff' },
// };

// const ALL_TAGS = ['All', 'Starbucks', 'LP', 'CFA', 'Jones'];

//           // date: tds[0] ?? "",
//           // time: tds[1] ?? "",
//           // description: tds[2] ?? "",
//           // account: tds[3] ?? "",
//           // amount: tds[5] ?? "",



// // ---------- UI Bits ----------
// const TagChip = memo(function TagChip({ label, active, onPress }) {
//   return (
//     <Pressable onPress={onPress} style={[styles.chip, active && styles.chipActive]}>
//       <Text style={[styles.chipText, active && styles.chipTextActive]}>{label}</Text>
//     </Pressable>
//   );
// });

// const Tag = memo(function Tag({ value }) {
//   let val = "";
//   if(value.includes("Chick fil A")) {
//     val = "CFA" 
//   }
//   else if(value.includes("Jones")) {
//     val = "Jones" 
//   }
//   else if(value.includes("KC's Coffee")) {
//     val = "Starbucks" 
//   }
//    else if(value.includes("Lions Pride Express")) {
//     val = "LP" 
//   }
//   const style = TAG_STYLES[val] || { bg: '#E5E7EB', text: '#111827' };
//   return (
//     <View style={[styles.tag, { backgroundColor: style.bg }]}>
//       <Text style={[styles.tagText, { color: style.text }]}>{value}</Text>
//     </View>
//   );
// });

// const TransactionRow = memo(function TransactionRow({ item }) {
//   let unit = "";
//   if(item.type == "UNIT") {
//     unit = "Mealswipe"
//   } else {
//     unit = "Dining Dollars"
//   }

//   return (
//     <View style={styles.row}>
//       <View style={styles.rowText}>
//         <Text style={styles.desc} numberOfLines={1}>{unit}</Text>
//         <Tag value={item.description} />
//       </View>
//       <Text style={styles.amount}>{item.amount}</Text>
//     </View>
//   );
// });


// const SectionHeader = memo(function SectionHeader({ title, total }) {
//   return (
//     <View style={styles.sectionHeader}>
//       <Text style={styles.sectionTitle}>{title}</Text>
//       <Text style={styles.sectionTotal}>{total}</Text>
//     </View>
//   );
// });


// // ---------- Main Component ----------
// export default function HistoryScreen() {
//   const []
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");
//   const {
//     transactions,
//     error,
//     mealInfo,
//     fetchMealData,
//   } = useMealSwipeData();

//     const handleGetHtml = async () => {
//     try {
//       await fetchMealData(username, password);
//     }
//     catch (err) {
//       console.log(err)
//     }
//   };

//   const [sections, setSections] = useState(transactions);
//   const [activeTag, setActiveTag] = useState('All');

//   // Filter sections by tag (and drop empty sections)
//   const filtered = useMemo(() => {
//     const tag = activeTag === 'All' ? null : activeTag;
//     const mapped = sections.map((s) => {
//       const data = tag ? s.data.filter((t) => t.tag === tag) : s.data;
//     });
//     return mapped.filter((s) => s.data.length > 0);
//   }, [sections, activeTag]);

//   // const grandTotal = useMemo(
//   //   () => filtered.reduce((sum, s) => sum + s._total, 0),
//   //   [filtered]
//   // );


//   // Memoized renderers to reduce re-renders
//   const renderItem = useCallback(({ item }) => <TransactionRow item={item} />, []);
//   // const renderSectionHeader = useCallback(
//   //   ({ section }) => <SectionHeader title={section.title} total={section._total} />,
//   //   []
//   // );
//   // const keyExtractor = useCallback((item) => item.id, []);

//   // returning the app
//   return (
//     <SafeAreaView style={styles.safe}>
//       {/* Header */}
//       <Header />
//       <View style={styles.listHeader}>
//         <Text style={styles.h1}>Transactions</Text>
//         <Text style={styles.subtitle}>
//           {/* {activeTag === 'All' ? 'Last 10 days' : `${activeTag} • Last 10 days`} */}
//         </Text>

//         {/* Tag filter row */}
//         <View style={styles.chipsRow}>
//           {ALL_TAGS.map((label) => (
//             <TagChip
//               key={label}
//               label={label}
//               active={activeTag === label}
//               onPress={() => setActiveTag(label)}
//             />
//           ))}
//         </View>
//       </View>

//       {/* List */}
//       <FlatList
//       data={filtered}
//         ListFooterComponent={
//           <View style={styles.footer}>
//             <Text style={styles.footerText}>
//               {`Total (${filtered.length} day${filtered.length === 1 ? '' : 's'}): `}
//               <Text style={styles.footerStrong}>Hi there</Text>
//             </Text>
//           </View>
//         }
//       />
//     </SafeAreaView>
//   );
// }






// // ---------- Styles ----------
// const styles = StyleSheet.create({
//   safe: { flex: 1, backgroundColor: '#0B1220' },
//   listContent: { paddingBottom: 24 },
//   listHeader: {
//     paddingHorizontal: 16,
//     paddingTop: 12,
//     paddingBottom: 8,
//   },
//   h1: { color: 'white', fontSize: 24, fontWeight: '700', letterSpacing: 0.2 },
//   subtitle: { marginTop: 2, color: '#9CA3AF', fontSize: 13 },
//   chipsRow: { flexDirection: 'row', flexWrap: 'wrap', gap: 8, marginTop: 12 },
//   chip: {
//     paddingHorizontal: 12,
//     paddingVertical: 6,
//     borderRadius: 999,
//     backgroundColor: '#111827',
//     borderWidth: StyleSheet.hairlineWidth,
//     borderColor: '#374151',
//   },
//   chipActive: { backgroundColor: '#1F2937', borderColor: '#6B7280' },
//   chipText: { color: '#D1D5DB', fontSize: 13, fontWeight: '600' },
//   chipTextActive: { color: '#F9FAFB' },

//   sectionHeader: {
//     backgroundColor: '#0B1220',
//     paddingHorizontal: 16,
//     paddingTop: 14,
//     paddingBottom: 8,
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'flex-end',
//   },
//   sectionTitle: { color: 'white', fontSize: 15, fontWeight: '700' },
//   sectionTotal: { color: '#D1D5DB', fontSize: 13, fontVariant: ['tabular-nums'] },

//   row: {
//     paddingHorizontal: 16,
//     paddingVertical: 12,
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//   },
//   rowText: { flex: 1, paddingRight: 12 },
//   desc: { color: 'white', fontSize: 16, marginBottom: 6 },
//   amount: { color: 'white', fontSize: 16, fontWeight: '600', fontVariant: ['tabular-nums'] },

//   tag: { alignSelf: 'flex-start', paddingHorizontal: 10, paddingVertical: 4, borderRadius: 999 },
//   tagText: { fontSize: 12, fontWeight: '700' },
//   itemSep: { height: StyleSheet.hairlineWidth, backgroundColor: '#1F2937', marginLeft: 16 },
//   sectionSep: { height: 10 },
//   footer: {
//     paddingHorizontal: 16,
//     paddingVertical: 20,
//     borderTopWidth: StyleSheet.hairlineWidth,
//     borderTopColor: '#1F2937',
//     marginTop: 8,
//   },
//   footerText: { color: '#9CA3AF', fontSize: 14 },
//   footerStrong: { color: '#E5E7EB', fontWeight: '700' },
// });