import { useContext } from 'cameras/context'

export const useSouthWest = () => ({
  sw: {
    lat: { ...useContext().items[useContext().items.length - 1] }.latitude,
    lng: { ...useContext().items[useContext().items.length - 1] }.longitude,
  },
})
