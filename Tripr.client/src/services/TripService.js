import Pop from '../utils/Pop'

class TripService {
  copyText() {
    const copyText = document.getElementById('join-code')

    navigator.clipboard.writeText(copyText.value)

    Pop.toast('Join Code Copied', 'success')
  }
}
export const tripService = new TripService()
