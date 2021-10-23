import ContactInterface from '../../interfaces/Contact';
import * as contactSchema from '../../schemas/contactSchema';

function checkContactDataError(contact: ContactInterface): string | null {
    if (contactSchema.name.validate(contact.name).error) {
        return 'Name is not allowed to be empty';
    }
    if (contactSchema.email.validate(contact.email).error) {
        return 'E-mail must be a valid e-mail';
    }
    if (contactSchema.birthdate.validate(contact.birthdate).error) {
        return 'Birthdate should use the DD/MM/YYY format';
    }
    if (contactSchema.zipCode.validate(contact.address.zipCode).error) {
        return 'Zip code must have 8 numbers';
    }
    if (contactSchema.state.validate(contact.address.state).error) {
        return 'State is required';
    }
    if (contactSchema.city.validate(contact.address.city).error) {
        return 'City is required';
    }
    if (contactSchema.street.validate(contact.address.street).error) {
        return 'Street is required';
    }
    if (contactSchema.number.validate(contact.address.number).error) {
        return 'Address number is required';
    }
    return null;
}

export default checkContactDataError;
