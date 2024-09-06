import React from 'react'
import { newsAuthApiCall } from './newAuthAPICall'
import { contactURL } from '../constants/url'
import { ContactData } from '@/types/contact'

export const postContact = async (body : ContactData) => {
    return newsAuthApiCall(contactURL, { body });
}
