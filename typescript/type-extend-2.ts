interface BasicAddress
{
    street: string;
    city: string;
    country: string;
}
interface AddressWithUnit extends BasicAddress
{
    unit: string;
}
type Address2 = BasicAddress & {
    unit: string;
}