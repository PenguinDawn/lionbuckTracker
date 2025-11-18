import { memo } from "react";
import { StyleSheet, Text, View } from "react-native";

const Tag = memo(function Tag({ value }) {
  let val = "";
  if(value.includes("Chick fil A")) {
    val = "CFA" 
  }
  else if(value.includes("Jones")) {
    val = "Jones" 
  }
  else if(value.includes("KC's Coffee")) {
    val = "Starbucks" 
  }
   else if(value.includes("Lions Pride Express")) {
    val = "LP" 
  }
  const style = TAG_STYLES[val] || { bg: '#E5E7EB', text: '#111827' };
  return (
    <View style={[styles.tag, { backgroundColor: style.bg }]}>
      <Text style={[styles.tagText, { color: style.text }]}>{value}</Text>
    </View>
  );
});


const TransactionRow = ({item}) => {

  return (
    <View style={styles.row}>
      <View style={styles.rowText}>
        <Text style={styles.desc} numberOfLines={1}>{unit}</Text>
        <Tag value={item.description} />
      </View>
      <Text style={styles.amount}>{item.amount}</Text>
    </View>
  );
}

export default TransactionRow

// ---------- Styles ----------
const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: '#0B1220' },
  listContent: { paddingBottom: 24 },
  listHeader: {
    paddingHorizontal: 16,
    paddingTop: 12,
    paddingBottom: 8,
  },
  h1: { color: 'white', fontSize: 24, fontWeight: '700', letterSpacing: 0.2 },
  subtitle: { marginTop: 2, color: '#9CA3AF', fontSize: 13 },
  chipsRow: { flexDirection: 'row', flexWrap: 'wrap', gap: 8, marginTop: 12 },
  chip: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 999,
    backgroundColor: '#111827',
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: '#374151',
  },
  chipActive: { backgroundColor: '#1F2937', borderColor: '#6B7280' },
  chipText: { color: '#D1D5DB', fontSize: 13, fontWeight: '600' },
  chipTextActive: { color: '#F9FAFB' },

  sectionHeader: {
    backgroundColor: '#0B1220',
    paddingHorizontal: 16,
    paddingTop: 14,
    paddingBottom: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
  },
  sectionTitle: { color: 'white', fontSize: 15, fontWeight: '700' },
  sectionTotal: { color: '#D1D5DB', fontSize: 13, fontVariant: ['tabular-nums'] },

  row: {
    paddingHorizontal: 16,
    paddingVertical: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  rowText: { flex: 1, paddingRight: 12 },
  desc: { color: 'white', fontSize: 16, marginBottom: 6 },
  amount: { color: 'white', fontSize: 16, fontWeight: '600', fontVariant: ['tabular-nums'] },

  tag: { alignSelf: 'flex-start', paddingHorizontal: 10, paddingVertical: 4, borderRadius: 999 },
  tagText: { fontSize: 12, fontWeight: '700' },
  itemSep: { height: StyleSheet.hairlineWidth, backgroundColor: '#1F2937', marginLeft: 16 },
  sectionSep: { height: 10 },
  footer: {
    paddingHorizontal: 16,
    paddingVertical: 20,
    borderTopWidth: StyleSheet.hairlineWidth,
    borderTopColor: '#1F2937',
    marginTop: 8,
  },
  footerText: { color: '#9CA3AF', fontSize: 14 },
  footerStrong: { color: '#E5E7EB', fontWeight: '700' },
});