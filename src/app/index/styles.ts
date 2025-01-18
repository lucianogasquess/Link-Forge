import { StyleSheet } from 'react-native';
import  { colors } from "@/styles/colors";
 
    export const styles = StyleSheet.create({
        container: {
            flex: 1,
            paddingTop: 62,
        },
        title: {
            fontSize: 24,
            color: colors.gray[900],
        },
        header: {
            paddingHorizontal: 24,
            width: "100%",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: 32,
        },
        logo: {
            width: 38,
            height: 32,
        },
        links: {
           borderTopColor: colors.gray[600],
           borderTopWidth: 1,
        },
        linksContent: {
            gap: 20,
            padding: 24,
            paddingBottom: 100,
        },
        modal: {
            flex: 1,
            justifyContent: "flex-end",
        },
        modalContent: {
            backgroundColor: colors.gray[900],
            borderTopWidth: 1,
            borderTopColor: colors.gray[800],
            paddingBottom: 42,
            padding: 24,
        },
        modalHeader: {
            width: "100%",
            flexDirection: "row",
            alignItems: "center",
            marginBottom: 32,
        },
        modalCategory: {
            flex: 1,
            fontSize: 16,
            fontWeight: "600",
            color: colors.gray[400],
        },
        modalLinkName: {
            fontSize: 18,
            color: colors.gray[200],
            fontWeight: "600",
        },
        modalUrl: {
            fontSize: 14,
            color: colors.gray[400],
        },
        modalFooter: {
            flexDirection: "row",
            marginTop: 32,
            width: "100%",
            justifyContent: "space-between",
            borderTopWidth: 1,
            borderTopColor: colors.gray[600],
            paddingVertical: 14,
        }
    });