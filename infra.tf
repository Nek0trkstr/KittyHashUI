# Set the variable value in *.tfvars file
# or using -var="do_token=..." CLI option

# Configure the DigitalOcean Provider
provider "digitalocean" {
  token = "4063c0206029bd7755ddb9118c9fc3b0ae4dacfe4314d446f76ad81a702cfebd"
}

data "digitalocean_ssh_key" "pubkey" {
  name = "Mac laptop"
}

resource "digitalocean_volume" "chiilhopvolume" {
  name   = "chiilhop"
  region = "ams3"
  size = 5
}

resource "digitalocean_droplet" "uploader" {
  image  = "ubuntu-18-04-x64"
  name   = "musicuploader"
  region = "ams3"
  size   = "s-1vcpu-1gb"
  ssh_keys = [data.digitalocean_ssh_key.pubkey.id]
}

resource "digitalocean_volume_attachment" "foobar" {
  droplet_id = digitalocean_droplet.uploader.id
  volume_id  = digitalocean_volume.chiilhopvolume.id
}

resource "digitalocean_kubernetes_cluster" "kittyhashcluster" {
  name    = "kittyhash-cluster"
  region  = "ams3"
  version = "1.16.6-do.1"

  node_pool {
    name       = "autoscale-worker-pool"
    size       = "s-1vcpu-2gb"
    auto_scale = true
    node_count = 3
  }
}
