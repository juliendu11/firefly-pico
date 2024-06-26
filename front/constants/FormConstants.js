export const FORM_CONSTANTS_TRANSACTION_FIELDS = {
  TRANSACTION_FORM_FIELD_AMOUNT: 'TRANSACTION_FORM_FIELD_AMOUNT',
  TRANSACTION_FORM_FIELD_SOURCE_ACCOUNT: 'TRANSACTION_FORM_FIELD_SOURCE_ACCOUNT',
  TRANSACTION_FORM_FIELD_DESTINATION_ACCOUNT: 'TRANSACTION_FORM_FIELD_DESTINATION_ACCOUNT',
  TRANSACTION_FORM_FIELD_CATEGORY: 'TRANSACTION_FORM_FIELD_CATEGORY',
  TRANSACTION_FORM_FIELD_DESCRIPTION: 'TRANSACTION_FORM_FIELD_DESCRIPTION',
  TRANSACTION_FORM_FIELD_TAG: 'TRANSACTION_FORM_FIELD_TAG',
  TRANSACTION_FORM_FIELD_DATE: 'TRANSACTION_FORM_FIELD_DATE',
  TRANSACTION_FORM_FIELD_NOTES: 'TRANSACTION_FORM_FIELD_NOTES',
}

export const FORM_CONSTANTS_TRANSACTION_FIELDS_LIST = [
  { code: FORM_CONSTANTS_TRANSACTION_FIELDS.TRANSACTION_FORM_FIELD_AMOUNT, name: 'Amount field' },
  { code: FORM_CONSTANTS_TRANSACTION_FIELDS.TRANSACTION_FORM_FIELD_SOURCE_ACCOUNT, name: 'Source account' },
  { code: FORM_CONSTANTS_TRANSACTION_FIELDS.TRANSACTION_FORM_FIELD_TAG, name: 'Tags' },
  { code: FORM_CONSTANTS_TRANSACTION_FIELDS.TRANSACTION_FORM_FIELD_DESCRIPTION, name: 'Description' },
  { code: FORM_CONSTANTS_TRANSACTION_FIELDS.TRANSACTION_FORM_FIELD_CATEGORY, name: 'Category' },
  { code: FORM_CONSTANTS_TRANSACTION_FIELDS.TRANSACTION_FORM_FIELD_DATE, name: 'Date' },
  { code: FORM_CONSTANTS_TRANSACTION_FIELDS.TRANSACTION_FORM_FIELD_NOTES, name: 'Notes' },
  { code: FORM_CONSTANTS_TRANSACTION_FIELDS.TRANSACTION_FORM_FIELD_DESTINATION_ACCOUNT, name: 'Destination account' },
]

export const TRANSACTION_LIST_ITEM_BIG_ICON_FIELDS = {
  accountIcon: 'accountIcon',
  tagIcon: 'accountIcon',
  categoryIcon: 'accountIcon',
}

export const TRANSACTION_LIST_ITEM_BIG_ICON_LIST = [
  { code: TRANSACTION_LIST_ITEM_BIG_ICON_FIELDS.accountIcon, name: 'Account icon' },
  { code: TRANSACTION_LIST_ITEM_BIG_ICON_FIELDS.accountIcon, name: 'Tag icon' },
  { code: TRANSACTION_LIST_ITEM_BIG_ICON_FIELDS.accountIcon, name: 'Category icon' },
]
